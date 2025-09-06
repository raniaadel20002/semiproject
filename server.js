const { app } = require("./bootstrap")
//home page routes
const { homepage } = require("./controllers/homepagecont")
//auth routes
const { register } = require("./controllers/registercont")
const { start } = require("./controllers/startcont")
const { verify } = require("./controllers/verifycont")  
const { forgetpassword } = require("./controllers/forgetpasswordcont")
const { resetpassword } = require("./controllers/resetpasswordcont")    
const { logout } = require("./controllers/logoutcont")
//category routes
const { category } = require("./controllers/categorycont")
const { addCategory } = require("./controllers/addcategorycont")
const { deleteCategoryByid } = require("./controllers/deletecategorybyidcont")
//note routes
const { note } = require("./controllers/notecont")
const { notebyid } = require("./controllers/notebyidcont")
const { addnote } = require("./controllers/addnotecont")    
const { updatenotebyid } = require("./controllers/updatenotebyidcont")
const { deletenotebyid } = require("./controllers/deletenotebyidcont")
//profile routes
const { profile } = require("./controllers/profilecont")
const { changeprofilepassword } = require("./controllers/changeprofilepasswordcont")
const { changeprofilename } = require("./controllers/changeprofilenamecont")    
const { profileenapleotp } = require("./controllers/profileenapleotpcont")




app.get('/homepage',homepage)
app.post('/register',register)
app.post('/start',start)
app.post('/verify',verify)
app.post('forgetpassword',forgetpassword)
app.post('/resetpassword',resetpassword)
app.post('/logout',logout) 
app.post('/category',category)
app.post('/addcategory',addCategory)
app.delete('/deletecategorybyid',deleteCategoryByid) 
app.post('/note',note)
app.get('/notebyid',notebyid)
app.post('/addnote',addnote)
app.put('/updatenotebyid',updatenotebyid)
app.patch('/updatenotebyid',updatenotebyid)
app.delete('/deletenotebyid',deletenotebyid)
app.get('/profile',profile)
app.post('/changeprofilepassword',changeprofilepassword)
app.post('/changeprofilename',changeprofilename)
app.post('/profileenapleotp',profileenapleotp)



