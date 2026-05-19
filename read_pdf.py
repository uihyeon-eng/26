import sys

try:
    import PyPDF2
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf as PyPDF2

try:
    reader = PyPDF2.PdfReader('영어기능지도_개발계획서.pdf')
    text = ''
    for page in reader.pages:
        text += page.extract_text() + '\n'
    print(text)
except Exception as e:
    print(f"Error: {e}")
