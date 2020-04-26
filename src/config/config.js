const mongoose = require('mongoose');
// DB
// mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(Error, err.message);
});

module.exports = mongoose;