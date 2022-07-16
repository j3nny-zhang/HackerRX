import botocore
import boto3
from pprint import pprint


class OCR:
    """Class for performing optical character recognition using Amazon Textract and Amazon Comprehend Medical."""

    def __init__(self):
        try:
            self.textract = boto3.client('textract')
            self.comprehend_medical = boto3.client('comprehendmedical')
        except botocore.exceptions.ClientError as error:
            raise error

    def detect(self, documentPath: str):
        """Returns the text found in the document."""
        with open(documentPath, 'rb') as document:
            imageBytes = bytearray(document.read())
        result = self.textract.detect_document_text(
            Document={'Bytes': imageBytes})
        text = ""
        for item in result["Blocks"]:
          if item["BlockType"] == "LINE":
            text += item["Text"] + "\n"
        return text
    
    def parse(self, text):
        """Returns a list of entities found in the text."""
        result = self.comprehend_medical.detect_entities(Text=text)
        return result


def main():
    ocr = OCR()
    response = ocr.detect('sample_prescription.jpg')
    pprint(response)


if __name__ == "__main__":
    main()
