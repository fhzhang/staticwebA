import logging
import requests
import json

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    res = requests.get("https://61n.azurewebsites.net/get")

    return func.HttpResponse(json.dumps(res.json()), status_code=200, mimetype="application/json")
