const authCtrl = {};

/*
####################################################################################################
methods singIn ciudadano
####################################################################################################
*/
//method get signIn
authCtrl.signInCiudadanoTemplate = async (req, res) => {
    return res.render('signIn')
}

module.exports = authCtrl;