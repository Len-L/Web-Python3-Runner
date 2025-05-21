# Web Python3 Runner Online

A modern web application that allows you to execute Python code online with pre-installed libraries. Created by LenL Quantum.

## 🌟 Features

- **Live Code Execution**: Write and run Python code directly in your browser
- **Pre-installed Libraries**:
  - NumPy - For numerical computations
  - Pandas - For data manipulation and analysis
  - Matplotlib - For creating visualizations
  - Scikit-learn - For machine learning tasks
  - Requests - For making HTTP requests
  - BeautifulSoup4 - For web scraping
- **Modern UI/UX**:
  - Clean and responsive design
  - Syntax highlighting
  - Real-time output display
  - Error handling with clear messages

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/Len-L/Web-Python3-Runner.git
cd Web-Python3-Runner
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install the required packages:
```bash
pip install -r requirements.txt
```

## 💻 Usage

1. Start the Flask server:
```bash
python app.py
```

2. Open your web browser and navigate to:
```
http://localhost:8000
OR
http://127.0.0.1:8000
```

3. Write your Python code in the editor
4. Click "Run Code" to execute
5. See the output below the editor

## 🎯 Example Code

```python
# Example: Simple calculation using NumPy
import numpy as np

# Create an array
arr = np.array([1, 2, 3, 4, 5])

# Calculate mean and standard deviation
mean = np.mean(arr)
std = np.std(arr)

print(f"Array: {arr}")
print(f"Mean: {mean}")
print(f"Standard Deviation: {std}")
```

## 📝 Project Structure

```
python-code-runner/
├── app.py              # Flask application
├── requirements.txt    # Python dependencies
├── templates/         
│   └── index.html     # Main HTML template
└── static/
    ├── css/
    │   └── style.css  # Custom styles
    └── js/
        └── main.js    # Frontend JavaScript
```

## 🎥 Tutorial & More Content

Check out my YouTube channel for tutorials and more programming content:
[LenL Quantum YouTube Channel](https://youtube.com/@LenL_)

## 📫 Contact

- YouTube: [LenL Quantum](https://youtube.com/@LenL_)
- GitHub: [Your GitHub Profile](https://github.com/Len-L)





