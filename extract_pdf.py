from pypdf import PdfReader

reader = PdfReader("public/docs/Rijo_varughese_resume-2026.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

print("---BEGIN EXTRACTED CONTENT---")
print(text)
print("---END EXTRACTED CONTENT---")
