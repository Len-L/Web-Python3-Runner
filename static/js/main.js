
document.addEventListener("DOMContentLoaded", function() {
    const runButton = document.getElementById("run-btn");
    const codeArea = document.getElementById("python-code");
    const outputArea = document.getElementById("output");
    
    runButton.addEventListener("click", async function() {
        try {
            // Nonaktifkan tombol dan tampilkan status
            runButton.disabled = true;
            runButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Running...';
            outputArea.textContent = "Executing code...";
            
            const response = await fetch("/run", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ code: codeArea.value })
            });
            
            const data = await response.json();
            console.log("Response data:", data); // Debug log
            
            if (response.ok) {
                if (data.stdout || data.stderr) {
                    outputArea.textContent = data.stdout || data.stderr;
                } else {
                    outputArea.textContent = "Code executed successfully with no output.";
                }
                outputArea.style.color = data.stderr ? '#dc3545' : '#212529';
            } else {
                outputArea.textContent = data.error || "An error occurred while running the code.";
                outputArea.style.color = '#dc3545';
            }
        } catch (err) {
            console.error("Error:", err); // Debug log
            outputArea.textContent = "An error occurred while communicating with the server.";
            outputArea.style.color = '#dc3545';
        } finally {
            // tombol reset
            runButton.disabled = false;
            runButton.textContent = "Run Code";
        }
    });

    // Tambahkan kode contoh ke textarea "suka suka"
    const exampleCode = `# Example: Simple calculation using NumPy
import numpy as np

# Create an array
arr = np.array([1, 2, 3, 4, 5])

# Calculate mean and standard deviation
mean = np.mean(arr)
std = np.std(arr)

print(f"Array: {arr}")
print(f"Mean: {mean}")
print(f"Standard Deviation: {std}")`;

    codeArea.value = exampleCode;
});




