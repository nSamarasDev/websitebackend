var models = require('./server.js').models;

// var toSave = [
//     {name: 'Nick1', 'email': 'n.samaras1@outlook.com'},
//     {name: 'Nick2', 'email': 'n.samaras2@outlook.com'},
//     {name: 'Nick3', 'email': 'n.samaras3@outlook.com'},
//     {name: 'Nick4', 'email': 'n.samaras4@outlook.com'},
//     {name: 'Nick5', 'email': 'n.samaras5@outlook.com'},
//     {name: 'Nick6', 'email': 'n.samaras6@outlook.com'},
//     {name: 'Nick7', 'email': 'n.samaras7@outlook.com'},
//     {name: 'Nick8', 'email': 'n.samaras8@outlook.com'},
//     {name: 'Nick9', 'email': 'n.samaras9@outlook.com'},
//     {name: 'Nick10', 'email': 'n.samara104@outlook.com'},
//     {name: 'Nick11', 'email': 'n.samaras11@outlook.com'},
//     {name: 'Nick12', 'email': 'n.samaras12@outlook.com'},
//     {name: 'Nick13', 'email': 'n.samaras13@outlook.com'}
// ];

// toSave.map(obj => {
//     models.Profile.create(obj, (err, created) => {
//         console.log("Created?", created);
//     })
// })



// var filter = {
//     where: {
//        email: {like: 'nick'},
//     //    postCount: {lte: 10}      // gte means grater than or equal, lte is less than or equal to
//     },  // where to find
//     order: 'id ASC',  //   by 'id ASC' or "id DESC" or by 'date ASC' or 'date DESC'.  Order by: "field direction"
//     limit: 10,
//     skip: 0,
//     fields: {
//         email: true
//     }

// }


// Profile.Posts.Image


models.Profile.findById("61842724473dcb1e68d88e7d", {include: 'Posts'},  (err, found) => {
    console.log("Found?", err, found);
    found.Posts.destroyAll({date: {lte: new Date('2019-02-04')}})
});




