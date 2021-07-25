const express = require('express');
const router = express.Router();
//faculty model
const Faculties = require('../models/facultyschema');
//admin page
router.get('/', (req, res) => {
    res.render('admin/admininfo');
})
//add faculty
router.get('/addfaculty', (req, res) => {
    res.render('admin/addfaculty');
})
//post faculty details
router.post('/addfaculty', (req, res) => {
    console.log(req.body);
    Faculties.findOne({ faadhar: req.body.faadhar }, (err, faculty) => {
        if (err) throw err;
        if (faculty) {
            console.log('Faculty Data Already Exist !');
            res.render('admin/addfaculty');
        }
        else {
            var faculty = new Faculties({
                fname: req.body.fname,
                fdob: req.body.fdob,
                fgender: req.body.fgender,
                fdept: req.body.fdept,
                fdesignation: req.body.fdesignation,
                fresaddress: { faddress: req.body.faddress, fcity: req.body.fcity, fstate: req.body.fstate, fzip: req.body.fzip },
                fperaddress: { fpaddress: req.body.fpaddress, fpcity: req.body.fpcity, fpstate: req.body.fpstate, fpzip: req.body.fpzip, fnationality: req.body.fnationality },
                fmobile: req.body.fmobile,
                faltrmobile: req.body.faltrmobile,
                femail: req.body.femail,
                fedu: [{ fedusno1: req.body.fedusno1, fedudeg1: req.body.fedudeg1, feduclg1: req.body.feduclg1, feduyrofpass1: req.body.feduyrofpass1, fedumark1: req.body.fedumark1, feduclass1: req.body.feduclass1 },
                { fedusno2: req.body.fedusno2 || null, fedudeg2: req.body.fedudeg2 || null, feduclg2: req.body.feduclg2 || null, feduyrofpass2: req.body.feduyrofpass2 || null, fedumark2: req.body.fedumark2 || null, feduclass2: req.body.feduclass2 || null },
                { fedusno3: req.body.fedusno3 || null, fedudeg3: req.body.fedudeg3 || null, feduclg3: req.body.feduclg3 || null, feduyrofpass3: req.body.feduyrofpass3 || null, fedumark3: req.body.fedumark3 || null, feduclass3: req.body.feduclass3 || null },
                { fedusno4: req.body.fedusno4 || null, fedudeg4: req.body.fedudeg4 || null, feduclg4: req.body.feduclg4 || null, feduyrofpass4: req.body.feduyrofpass4 || null, fedumark4: req.body.fedumark4 || null, feduclass4: req.body.feduclass4 || null },
                { fedusno5: req.body.fedusno5 || null, fedudeg5: req.body.fedudeg5 || null, feduclg5: req.body.feduclg5 || null, feduyrofpass5: req.body.feduyrofpass5 || null, fedumark5: req.body.fedumark5 || null, feduclass5: req.body.feduclass5 || null }],
                femp: [{ fempsno1: req.body.fempsno1 || null, fempclg1: req.body.fempclg1 || null, fempdes1: req.body.fempdes1 || null, fempfrom1: req.body.fempfrom1 || null, fempto1: req.body.fempto1 || null },
                { fempsno2: req.body.fempsno2 || null, fempclg2: req.body.fempclg2 || null, fempdes2: req.body.fempdes2 || null, fempfrom2: req.body.fempfrom2 || null, fempto2: req.body.fempto2 || null },
                { fempsno3: req.body.fempsno3 || null, fempclg3: req.body.fempclg3 || null, fempdes3: req.body.fempdes3 || null, fempfrom3: req.body.fempfrom3 || null, fempto3: req.body.fempto3 || null },
                { fempsno4: req.body.fempsno4 || null, fempclg4: req.body.fempclg4 || null, fempdes4: req.body.fempdes4 || null, fempfrom4: req.body.fempfrom4 || null, fempto4: req.body.fempto4 || null },
                { fempsno5: req.body.fempsno5 || null, fempclg5: req.body.fempclg5 || null, fempdes5: req.body.fempdes5 || null, fempfrom5: req.body.fempfrom5 || null, fempto5: req.body.fempto5 || null },
                { fempsno6: req.body.fempsno6 || null, fempclg6: req.body.fempclg6 || null, fempdes6: req.body.fempdes6 || null, fempfrom6: req.body.fempfrom6 || null, fempto6: req.body.fempto6 || null },
                { fempsno7: req.body.fempsno7 || null, fempclg7: req.body.fempclg7 || null, fempdes7: req.body.fempdes7 || null, fempfrom7: req.body.fempfrom7 || null, fempto7: req.body.fempto7 || null },
                { fempsno8: req.body.fempsno8 || null, fempclg8: req.body.fempclg8 || null, fempdes8: req.body.fempdes8 || null, fempfrom8: req.body.fempfrom8 || null, fempto8: req.body.fempto8 || null }],
                femployeeid: req.body.femployeeid,
                fannaunivcode: req.body.fannaunivcode,
                faictecode: req.body.faictecode,
                fpan: req.body.fpan,
                faadhar: req.body.faadhar,
                fcommunity: req.body.fcommunity,
                freligion: req.body.freligion,
                faddqualify: { fexamname: req.body.fexamname || null, fexammarks: req.body.fexammarks || null, fexampercent: req.body.fexampercent || null },
                fdoctoral: req.body.fdoctoral,
                fdoctoralthesis: req.body.fdoctoralthesis,
                fdoctoralaward: req.body.fdoctoralaward,
            });
            console.log(faculty);
            faculty.save(err => {
                if (err) throw err;
                console.log('faculty detail saved successfully');

                res.render('admin/admininfo');
            })
        }
    })
})
module.exports = router;