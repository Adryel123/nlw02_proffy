const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {



    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <=${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = ${filters.subject};
    `
    const proffys = await db.all(query)

    // const proffyValue = {
    //     name: 'Adryel de Souza Arruda de Barros',
    //     avatar: 'https://github.com/account',
    //     whatsapp: '999999999',
    //     bio: 'Professor de matemática que também faz alguns códigos ;)'
    // }

    // const classValue = {
    //     subject: 8,
    //     cost: 35
    // }

    // const classScheduleValues = [
    //     { weekday: 0, time_from: 780, time_to: 1020 },
    //     { weekday: 4, time_from: 750, time_to: 900 }
    // ]

    // console.log(await createProffy(db, { proffyValue, classValue, classScheduleValues }))

    // const selectClassesSchedules = await db.all(`
    //     SELECT *
    //     FROM class_schedule
    //     WHERE class_schedule.class_id = 1
    //     AND class_schedule.weekday = 0
    //     AND class_schedule.time_from <=520
    //     AND class_schedule.time_to > 520;
    // `)

    // console.log(selectClassesSchedules)
})