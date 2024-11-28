function solve(browser, actions) {

    const browerName = browser['Browser Name'];
    let openTabs = browser['Open Tabs'];
    let recentlyClosed = browser['Recently Closed'];
    let logs = browser['Browser Logs'];


    actions.forEach(a => {
        const [actionType, tab] = a.split(' ');
        switch (actionType){
            case 'Open': {
                logs.push(a);
                openTabs.push(tab);
            };
            break;
            case 'Close': {                
                if(!openTabs.includes(tab)) return;
                openTabs.splice(openTabs.indexOf(tab), 1);                
                recentlyClosed.push(tab);
                logs.push(a);
            };
            break;
            default: {
                openTabs = [], recentlyClosed = [], logs = [];
            }
        }
    });


    console.log(browerName);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${logs.join(', ')}`);
    

}
// solve({
//     "Browser Name":"Google Chrome",
//     "Open Tabs":["Facebook","YouTube","Google Translate"],
//     "Recently Closed":["Yahoo","Gmail"],
//     "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );
solve({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);