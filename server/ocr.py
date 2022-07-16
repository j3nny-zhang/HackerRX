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
        prescriptions = []
        for entity in result["Entities"]:
            if entity["Category"] == "MEDICATION":
                prescription = {}
                prescription["brandName"] = entity["Text"]
                # How to refactor this?
                for attribute in entity["Attributes"]:
                    if attribute["Type"] == "DOSAGE":
                        prescription["dosage"] = attribute["Text"]
                    if attribute["Type"] == "ROUTE_OR_MODE":
                        prescription["routeOrMode"] = attribute["Text"]
                    if attribute["Type"] == "DURATION":
                        prescription["duration"] = attribute["Text"]
                    if attribute["Type"] == "FREQUENCY":
                        prescription["frequency"] = attribute["Text"]
                    if attribute["Type"] == "DATE_TIME":
                        prescription["dateTime"] = attribute["Text"]
                    if attribute["Type"] == "FORM":
                        prescription["form"] = attribute["Text"]
                prescriptions.append(prescription)
        return prescriptions


def main():
    ocr = OCR()
    response = ocr.detect('sample_prescription.jpg')
    pprint(response)


if __name__ == "__main__":
    main()
