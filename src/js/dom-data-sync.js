//
//  src/js/dom-data-sync.js
//
function checkSync() {
    setTimeout(function() {
        console.log('Synced: ' + (JSON.stringify(collectData()) === JSON.stringify(app.stage)));
    }, 500);
    
}
function syncStageAndStore() {
    app.collect();
    Vue.nextTick(function() {
        app.refresh();
    })
}