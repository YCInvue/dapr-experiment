# Orignal Liencensed info:
# ------------------------------------------------------------
# Copyright (c) Microsoft Corporation.
# Licensed under the MIT License. 
# ------------------------------------------------------------

#Modified.

import time
import requests
import os

dapr_url = "http://localhost:3500/v1.0/invoke/nodeapp/method/order"

while True:
    try:
        print('*******************************************************************', dapr_url)
        print('*******************************************************************', dapr_url)
        print('*******************************************************************', dapr_url)
        response = requests.get(dapr_url)
        print(response.json())
    except Exception as e:
        print(e)

    time.sleep(1)
