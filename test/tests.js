(()=>{
    "use strict";
    let assert = require('assert'),
        request = require('supertest'),
        should = require('should'),
        app = require('../server');

    describe('validTimeStamp', function(){
        describe('GET /:timestamp', function(){
            it('should return the valid parsing of the natural language date', function(done){
               request(app)
                .get('/13may1903')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res){
                    done();
                })
            });
        })
    });

    describe('invalidTimestamp', function(){
        describe('GET /:timestamp', function(){
            it('should return the null variant of the json response', function(done){
                request(app)
                    .get('/notAValidStr')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res){
                        done();
                    })

            });
        });
    });


});