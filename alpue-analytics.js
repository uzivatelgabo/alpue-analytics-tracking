





const alpue_version = 'dev.1.03'
console.log('--------------------------------------------------')
console.log('----- Alpue Analytics TRACKING JS loaded, version: ', alpue_version)



const logAlpueEvent = function(property, event_name){
    // console.log(`AA\u2122: fetching ${event_name} to ${property}`)
    const url = 'http://127.0.0.1:5001/gais-analytics-demo/us-central1/logRecordToBQ'
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            alpue_property: property,
            event_name: event_name,
            event_timestamp: Date.now(),
            event_timestamp_sec: Math.floor(Date.now() / 1000),
            page_title: document.title,
            page_url: document.location.href
        })
    }
    fetch(url, config)
        .then(res => res.text())
        .then(data => console.log('AA\u2122 server:', data))
}

// logAlpueEvent('prop_new_06_1727970808571', 'page_view')
