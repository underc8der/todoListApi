const routes = require('./api/routes/todoListRoutes.js');
const assert = require('assert');
const express = require('express');
const URL_ROOT = 'http://localhost:3000';
const superagent = require('superagent');

describe('Todo CRUD Testing', () => {
  var serve;
  after(() => {
    app = express();
    const routes = require('./api/routes/todoListRoutes');
    routes(app); 
    serve = app.listen(3000);
  });

  it('basic test of mocha printing out a hello test!', (done) => {
    console.log('Hello test!');
    done();
  });

  it('basic test to get all todo-list',(done) => {
    let url = URL_ROOT + '/tasks';
    superagent.get()
	  .end((err, res) => {
	    if(err)
	      return done(err);
	    assert.equal(res.status, 200);	  
	    assert.ok(res);
	    done();
	  });
	
    done();
  });
  
  after(function() {
    // Shut the server down when we're done
    serve.close();
  });
});
