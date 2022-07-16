/**
 * group of names constant values
 */


// 0, 1, 2, 3, 4, 5
enum WeekDays {
    'Mon', 
    'Tue', 
    'Wed', 
    'Thur', 
    'Fri', 
    'Sat', 
    'Sun'
};

function isWeekend(day: WeekDays): boolean {
    switch(day) {
        case WeekDays.Sat:
            return true;
            break;
        case WeekDays.Sun: 
            return true;
    }

    return false;
}

console.log(WeekDays);
console.log(WeekDays.Mon);
console.log(isWeekend(WeekDays.Sat));
console.log(isWeekend(WeekDays.Mon));
console.log(isWeekend(0));

// 0, 1, 2, 3
enum ApprovalStatus {
    draft, 
    submitted, 
    approved, 
    rejected
};

const request: {
    id: number, 
    status: ApprovalStatus, 
    description: string
} = {
    id: 1, 
    status: ApprovalStatus.approved, 
    description: `Send email to the applicant`
}
