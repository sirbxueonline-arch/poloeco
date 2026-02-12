import zipfile
import xml.etree.ElementTree as ET

def get_docx_text(path):
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml')
        document.close()
        
        # Simple extraction
        paragraphs = []
        root = ET.fromstring(xml_content)
        
        # Word XML namespaces are messy.
        # Find all 'w:t' elements.
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        body = root.find('w:body', ns)
        if body is None:
            # Maybe namespace is different or not declared
            pass

        # Iterating over all elements and checking tags
        for p in root.iter():
            if p.tag.endswith('}p'):
                text = ""
                for t in p.iter():
                    if t.tag.endswith('}t') and t.text:
                        text += t.text
                if text.strip():
                    paragraphs.append(text)
                    
        return '\n\n'.join(paragraphs)
    except Exception as e:
        return str(e)

print(get_docx_text(r'c:\Users\user\Desktop\Project GD\src\assets\docs\IRAHAS_EE.docx'))
