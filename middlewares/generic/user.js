/**
 * Set user from session id
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        if (req.session.userid)
            res.tpl.user = {
                role: "normal", 
                email: "mock@gmail.com", 
                name: "teszt pisti", 
                phone: "+36 30 59852",
                ratings : [
                    {
                        pub :{
                            name: "Szupi hely"
                        },
                        value: 4
                    },
                    {
                        pub :{
                            name: "Jobb hely"
                        },
                        value: 5
                    },
                ]
            };
        return next();
    };

};