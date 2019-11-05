const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = Promise;
mongoose.connect('mongodb+srv://victor:namchu2897@cluster0-3shzr.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

