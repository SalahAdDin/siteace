/**
 * Created by salahaddin on 27/03/16.
 */

var COMMON_SEARCH_WORDS = ['the', 'be', 'to', 'of', 'and', 'a', 'an', 'in', 'that', 'have', 'i',
    'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this',
    'but', 'his', 'by', 'from', 'they', 'we', 'her', 'she', 'or', 'my', 'all',
    'would', 'there', 'their', 'what', 'so', 'if', 'which', 'me', 'when', 'can',
    'no', 'him', 'could', 'them', 'than', 'then', 'its', 'these', 'us'
];

cleanSearchString = function(str1) {
    var str = str1.toLowerCase();
    str = str.replace(/[^\w\s]/g,"");
    var tmpArr = str.split(' ');
    var searchArr = [];
    for (var i=0; i < tmpArr.length; i++) {
        if (COMMON_SEARCH_WORDS.indexOf(tmpArr[i]) == -1) {
            searchArr.push(tmpArr[i]);
        }
    }
    return searchArr;
};

cleanString = function (str1, str2) {
    console.log('str1', str1);
    console.log('str2', str2);
    var str = str1.toLowerCase() + ' ' + str2.toLowerCase();
    str = str.replace(/[^\w\s]/g,"");
    return str;
};

// push all words to keyword array. make sure no duplicates or common words are included.
createKeywords = function (str) {
    var tmpArr = str.toLowerCase().split(' ');
    var tmpKeywords = [];
    for (var i=0; i < tmpArr.length; i++) {
        if (COMMON_SEARCH_WORDS.indexOf(tmpArr[i]) == -1) {
            if (tmpKeywords.indexOf(tmpArr[i]) == -1) {
                tmpKeywords.push(tmpArr[i]);
            }
        }
    }
    return tmpKeywords;
};
