from flask import Flask, flash, render_template
from flask.ext import restful
from flask_restful import reqparse, Resource

app = Flask(__name__, static_url_path='')
app.secret_key = 'why would I tell you my secret key?'

@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)