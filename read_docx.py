import zipfile, xml.etree.ElementTree as ET
import sys

def read_docx(path):
    try:
        doc = zipfile.ZipFile(path)
        content = doc.read('word/document.xml')
        root = ET.fromstring(content)
        texts = []
        for node in root.iter():
            if node.tag.endswith('}t') and node.text:
                texts.append(node.text)
        print(''.join(texts))
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    read_docx(r'c:\Users\wku\Downloads\Shin\Shin\버스요금.docx')
