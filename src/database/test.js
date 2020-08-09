const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: "Adryel",
        avatar: "https://avatars0.githubusercontent.com/u/16639397?s=400&u=797c95346e90f39db72f6a1d83b26ac5c6b83e42&v=4",
        whatsapp: "2499999999",
        bio: "O cara",
    }

    classValue = {
        subject: "Matemática",
        cost: "100,00",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1120,
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })
    // console.log(await db.all("SELECT * FROM proffys"))

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT *
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <=520
        AND class_schedule.time_to > 520;
    `)

    // console.log(selectClassesSchedules)
})