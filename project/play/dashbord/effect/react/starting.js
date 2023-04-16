var collection = {
    "2548" : {
        "album": "slippery when wet",
        "artist": "bon jovi",
        "tracks": [
            "let it rock",
            "you give love a bad name"
        ]
    },
    "2408": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "little red corvette"
        ]
    },
    "1245": {
        "artist": "robert palmer",
        "tracks": []
    },
    "2408": {
        "album": "ABBA Gold"
    }
};
// keeping a copy of the collection
var collectionCopy = JSON.parse(JSON.stringify(collection));


// updating the record collection
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection.id.prop;
    }else if (prop === "tracks") {
        // checking if tracks property exists and equating it to itself if it exists and if it doesn't exist equate it to an empty array 
        collection.id.prop = collection.id.prop || [];

        // adding avalue at the end of the tracks property
        collection.id.prop.push(value);

    }else{
        // incase the value isn't blank and not equal to tracks
        collection.id.prop = value;
    }
    return collection;
} 

// tset values
console.log(updateRecords(5439, "artist", "ABBA"));