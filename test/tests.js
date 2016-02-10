(()=>{
    "use strict";
    let assert = require('assert'),
        request = require('supertest'),
        should = require('should'),
        app = require('../app/server');

    describe('validTimeStamp', function(){
        describe('GET /:timestamp', function(){
            it('should return the valid parsing of the natural language date', function(done){
               request(app)
                .get('/13may1903')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res){
                    res.status.should.equal(200);
                    res.body.should.have.property('unix');
                    res.body.should.have.property('natural');
                    res.body.unix.should.equal(-2102961600);
                    res.body.natural.should.equal('May 13th, 1903');
                    done();
                })
            });
        })
    });

    describe('invalidTimestamp', function(){
        describe('GET /:invalidTimestamp', function(){
            it('should return the null variant of the json response', function(done){
                request(app)
                    .get('/notAValidStr')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res){
                        res.status.should.equal(200);
                        res.body.should.have.property('unix');
                        res.body.should.have.property('natural');
                        should.equal(res.body.unix, null);
                        should.equal(res.body.natural, null);
                        done();
                    })

            });
        });
    });


})();