




// git add . && git commit -m "update" && git push origin main

const alpue_version = 'dev.1.10'
console.log('---------- Alpue Analytics TRACKING JS loaded, version: ', alpue_version)


const logAlpueEvent = function(property, event_name){
    // console.log(`AA\u2122: fetching ${event_name} to ${property}`)
    const url = 'https://logrecordtobq-ey2vbzxqaa-uc.a.run.app'
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
            page_url: document.location.href,
            user_agent: document.user_agent
        })
    }
    console.log('---------- AA™ config sent to server:', JSON.parse(config.body));
    fetch(url, config)
        .then(res => res.text())
        .then(data => console.log('---------- AA\u2122 server:', data))
}

// logAlpueEvent('prop_new_06_1727970808571', 'page_view')
