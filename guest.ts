let guest_list : string[] = ['Abid','mehmood','romi','waqas'];
// for (let i = 0; i<guest_list.length; i++){
//     console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in fection.\n\nthank you!' )
// }


let not_present = "mehmood";
let new_guest = "hamza";
guest_list[1]= new_guest
for (let i = 0; i<guest_list.length; i++){
    console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in fection.\n\nthank you!\n' )
}

guest_list.unshift('usama','imran','ameen');
for (let i = 0; i<guest_list.length; i++){
    console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in fection. we found big table so we decide to invite 3 more guest \n\nthank you!\n' )
}
// console.log(`mr ${not_present} will not coming tomorow dinner ` );


