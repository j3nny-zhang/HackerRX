import botocore
import boto3
from pprint import pprint


class OCR:
    """Class for performing optical character recognition using Amazon Textract"""

    def __init__(self):
        try:
            self.textract = boto3.client('textract')
        except botocore.exceptions.ClientError as error:
            raise error

    def detect(self, documentPath: str):
        with open(documentPath, 'rb') as document:
            imageBytes = bytearray(document.read())
        response = self.textract.detect_document_text(
            Document={'Bytes': imageBytes})
        return response


def main():
    ocr = OCR()
    response = ocr.detect('sample_prescription.jpg')
    pprint(response)


if __name__ == "__main__":
    main()
