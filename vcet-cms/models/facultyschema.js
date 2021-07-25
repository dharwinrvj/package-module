const mongoose = require("mongoose");
const facultyschema = mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    fdob: {
        type: Date,
        require: true
    },
    fgender: {
        type: String,
        require: true
    },
    fdept: {
        type: String,
        require: true
    },
    fdesignation: {
        type: String,
        require: true
    },
    fresaddress: {
        faddress: {
            type: String,
            require: true
        },
        fcity: {
            type: String,
            require: true
        },
        fstate: {
            type: String,
            require: true
        }, fzip: {
            type: String,
            require: true
        }
    },
    fperaddress: {
        fpaddress: {
            type: String,
            require: true
        },
        fpcity: {
            type: String,
            require: true
        },
        fpstate: {
            type: String,
            require: true
        }, fpzip: {
            type: String,
            require: true
        },
        fnationality: {
            type: String,
            require: true
        }
    },
    fmobile: {
        type: Number,
        require: true,
        unique: true
    },
    faltrmobile: {
        type: Number,
        require: true
    },
    femail: {
        type: String,
        require: true,
        unique: true
    },
    fedu: [{ fedusno1: { type: Number, require: true }, fedudeg1: { type: String, require: true }, feduclg1: { type: String, require: true }, feduyrofpass1: { type: Number, require: true }, fedumark1: { type: Number, require: true }, feduclass1: { type: String, require: true } },
    { fedusno2: { type: Number, default: null }, fedudeg2: { type: String, default: null }, feduclg2: { type: String, default: null }, feduyrofpass2: { type: Number, default: null }, fedumark2: { type: Number, default: null }, feduclass2: { type: String, default: null } },
    { fedusno3: { type: Number, default: null }, fedudeg3: { type: String, default: null }, feduclg3: { type: String, default: null }, feduyrofpass3: { type: Number, default: null }, fedumark3: { type: Number, default: null }, feduclass3: { type: String, default: null } },
    { fedusno4: { type: Number, default: null }, fedudeg4: { type: String, default: null }, feduclg4: { type: String, default: null }, feduyrofpass4: { type: Number, default: null }, fedumark4: { type: Number, default: null }, feduclass4: { type: String, default: null } },
    { fedusno5: { type: Number, default: null }, fedudeg5: { type: String, default: null }, feduclg5: { type: String, default: null }, feduyrofpass5: { type: Number, default: null }, fedumark5: { type: Number, default: null }, feduclass5: { type: String, default: null } }],
    femp: [{ fempsno1: { type: Number, default: null }, fempclg1: { type: String, default: null }, fempdes1: { type: String, default: null }, fempfrom1: { type: Date, default: null }, fempto1: { type: Date, default: null } },
    { fempsno2: { type: Number, default: null }, fempclg2: { type: String, default: null }, fempdes2: { type: String, default: null }, fempfrom2: { type: Date, default: null }, fempto2: { type: Date, default: null } },
    { fempsno3: { type: Number, default: null }, fempclg3: { type: String, default: null }, fempdes3: { type: String, default: null }, fempfrom3: { type: Date, default: null }, fempto3: { type: Date, default: null } },
    { fempsno4: { type: Number, default: null }, fempclg4: { type: String, default: null }, fempdes4: { type: String, default: null }, fempfrom4: { type: Date, default: null }, fempto4: { type: Date, default: null } },
    { fempsno5: { type: Number, default: null }, fempclg5: { type: String, default: null }, fempdes5: { type: String, default: null }, fempfrom5: { type: Date, default: null }, fempto5: { type: Date, default: null } },
    { fempsno6: { type: Number, default: null }, fempclg6: { type: String, default: null }, fempdes6: { type: String, default: null }, fempfrom6: { type: Date, default: null }, fempto6: { type: Date, default: null } },
    { fempsno7: { type: Number, default: null }, fempclg7: { type: String, default: null }, fempdes7: { type: String, default: null }, fempfrom7: { type: Date, default: null }, fempto7: { type: Date, default: null } },
    { fempsno8: { type: Number, default: null }, fempclg8: { type: String, default: null }, fempdes8: { type: String, default: null }, fempfrom8: { type: Date, default: null }, fempto8: { type: Date, default: null } }],
    femployeeid: { type: Number, require: true, unique: true },
    fannaunivcode: { type: Number, require: true, unique: true },
    faictecode: { type: Number, require: true, unique: true },
    fpan: { type: String, require: true, unique: true },
    faadhar: { type: Number, require: true, unique: true },
    fcommmunity: { type: String, require: true },
    freligion: { type: String, require: true },
    faddqualify: { fexamname: { type: String, default: null }, fexammarks: { type: Number, default: null }, fexampercent: { type: Number, default: null }, },
    fdoctoral: { type: String, require: true },
    fdoctoralthesis: { type: String, default: null },
    fdoctoralaward: { type: String, default: null },
});
module.exports = mongoose.model("faculties", facultyschema);