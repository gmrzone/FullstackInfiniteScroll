import uuid
import os
import json
import pathlib
import random
from data.company import company_names, company_desc, tagline, email
from django.utils.text import slugify
json_data = [

]
images = [i for i in os.listdir(os.path.join(pathlib.Path(__file__).parent.absolute(), "mediafiles/company"))]

for i in range(len(company_desc)):
    data = {}
    data["model"] = "products.company"
    data['pk'] = str(uuid.uuid4())
    data['fields'] = {
        "name": company_names[i],
        "description": company_desc[i],
        "email": email[i],
        "tagline": tagline[i],
        "image": os.path.join("company", images[i]),
        "slug": slugify(company_names[i]),
        "capital": random.randint(10000000, 1000000000),
        "created": "2021-04-24",
        "updated": "2021-04-24"

    }
    json_data.append(data)

with open('main_data.json', 'w') as file:
    json.dump(json_data, file)