import sqlite3
from app import app
import flask
from flask import g
from flask import request
from flask import render_template

DATABASE = '/tmp/flaskr.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = connect_to_database()
    return db

def connect_to_database():
    #t = sqlite3.connect(DATABASE)
    return sqlite3.connect(DATABASE)

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().cursor()
    cur = cur.execute(query, args)
    #rv = [dict((cur.description[idx][0], value)
    #           for idx, value in enumerate(row)) for row in cur.fetchall()]
    #return (rv[0] if rv else None) if one else rv
    return cur
def query_All(query, one=False):
    cur = get_db().cursor()
    cur = cur.execute(query)
    #rv = [dict((cur.description[idx][0], value)
    #           for idx, value in enumerate(row)) for row in cur.fetchall()]
    #return (rv[0] if rv else None) if one else rv
    return cur
def insert(table, fields=(), values=()):
    # g.db is the database connection
    db = get_db()
    cur = db.cursor()
    query = 'INSERT INTO %s (%s) VALUES (%s)' % (
        table,
        ', '.join(fields),
        ', '.join(['?'] * len(values))
    )
    cur.execute(query, values)
    db.commit()
    id = cur.lastrowid
    cur.close()
    return str(id)

#@app.route('/write/?username=paul&age=32&sleep=45')

@app.route('/')

@app.route('/user')
def v123():
     results=query_All("Select * from progress")
     count=query_All("select count(*) from progress")
    #return render_template('index.html', name = str(profile.fetchall()[0][1]))
    #return render_template('mindee/index.html',vari=profile.fetchall())
     size=count.fetchone()[0]
     print(size)
     #return str(results.description)
     outresults = []

     for row in results.fetchall():
        outrow = {}
        outrow['id'] = row[0]
        outrow['username'] = row[1]
        outrow['age'] = row[2]
        outresults.append(outrow)
     return flask.json.dumps(outresults)
     #return str(outresults)
     #return render_template('mindee/index.html', progress=profile,l=size)

@app.route('/mor')
def v121():
    return render_template('mindee/index.html')

@app.route('/sleep')
def v124():
    return render_template('mindee/sleep.html')

@app.route('/survey')
def v125():
    return render_template('mindee/sleepsurvey.html')

@app.route('/persogoal')
def v126():
    return render_template('mindee/persogoal.html')

@app.route('/setgoal')
def v127():
    return render_template('mindee/setgoal.html')


@app.route('/write')
def index():
    newid = request.args.get('id')
    newname = request.args.get('username')
    newage = request.args.get('age')
    # newgender = request.args.get('gender')
    # newsleep = request.args.get('sleep')
    # newsociallife = request.args.get('social_life')
    # newexercise = request.args.get('exercise')
    # newstress = request.args.get('stress')

    return insert('progress', ['id','username','age'],
        [newid, newname, newage])

    # '''username= request.args.get('username')
    #             cur = query_db('select * from entries where username = ?', [username], one=True)
    #             if cur is None:
    #                 print 'No such user'
    #             else:
    #                 return str(cur.fetchall())'''

  
    
    #conn.close()
