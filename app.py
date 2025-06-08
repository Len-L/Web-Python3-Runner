# jalan-in ini 
from flask import Flask, request, jsonify, render_template
import subprocess
import tempfile
import os
import logging

app = Flask(__name__)

# logging
logging.basicConfig(level=logging.INFO)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/run", methods=["POST"])
def run_code():
    data = request.get_json()
    code = data.get("code", "")
    if not code:
        return jsonify({"error": "No code provided."}), 400

    try:
        # Tulis kode ke file sementara
        with tempfile.NamedTemporaryFile(mode="w", suffix=".py", delete=False) as tmp_file:
            tmp_file.write(code)
            tmp_filename = tmp_file.name

        # Jalankan kode dengan aman dengan batas waktu
        result = subprocess.run(
            ["python3", tmp_filename],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            universal_newlines=True,
            timeout=10
        )

        # Bersihkan file sementara
        os.remove(tmp_filename)

        # Siapkan respons JSON
        return jsonify({
            "stdout": result.stdout,
            "stderr": result.stderr
        })
    except subprocess.TimeoutExpired:
        return jsonify({"error": "Script execution timed out."}), 408
    except Exception as e:
        logging.exception("Error while running code.")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8000)
