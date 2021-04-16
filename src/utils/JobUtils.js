
    module.exports =  {
        remainingDays(job) {
            const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
            const createdDate = new Date(job.created_at)
            const dueDay = createdDate.getDate() + Number(remainingDays)
            const dueDateMs = createdDate.setDate(dueDay);
        
            const timeDiffMs = dueDateMs - Date.now();
            // transformar milli em dias
            const dayInMs = 1000 * 60 * 60 * 24;
            
            //Math.floor arredonda pra baixo
            const dayDiff = Math.ceil(timeDiffMs/dayInMs)
        
            //restam x dias
            return dayDiff;
        
            
        },

        calculateBudget: (job,valueHour) => valueHour * job["total-hours"],
    }