import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get_data', methods=['GET'])
def get_data():
    access_token = "ya29.a0AfB_byD1s9W4qqx35nz_vpK0zjY5hTKFBG9UW5v2vipBg8ux9prkA-ViCytV2M2HdaNWWtHlMc282cHrsxJngJlm6nDQMNTPTy4HLc91P73YZgIWNvoCfoK-Dzf1YBzXJnclXg3-X-cE-zCQdGQG7SJRJ1amF3EBGfYmCSQaCgYKAZgSARISFQHsvYlsJ47RUI7SG7-kb2NcpUhpew0174"

    # Gửi yêu cầu GET để lấy dữ liệu từ Google Sheets
    url = "https://sheets.googleapis.com/v4/spreadsheets/1h0lHjmLb2fhdvTxSl8uUj88zPwX9rlynnG46PA-0aHQ/values/data"
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    response = requests.get(url, headers=headers)

    # Kiểm tra phản hồi từ yêu cầu
    if response.status_code == 200:
        data = response.json()
        values = data.get("values", [])
        return jsonify(values)
    else:
        return jsonify({"error": "Yêu cầu không thành công"}), response.status_code

if __name__ == '__main__':
    app.run()