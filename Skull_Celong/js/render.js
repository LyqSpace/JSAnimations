$(document).ready(function () {
    add_imgs();
});

var pause0 = 3000;
var time_lapse = 8000;
var scores = {'001983': 0.4482758620689655, '001984': 0.27586206896551724, '001985': 0.27586206896551724, '001986': 0.41379310344827586, '001987': 0.4482758620689655, '001988': 0.1724137931034483, '001989': 0.3793103448275862, '001990': 0.5517241379310345, '001991': 0.6896551724137931, '001992': 0.5172413793103449, '001993': 0.3448275862068966, '001994': 0.3448275862068966, '001995': 0.6206896551724138, '001996': 0.20689655172413793, '001997': 0.5517241379310345, '001998': 0.3448275862068966, '001999': 0.3448275862068966, '002000': 0.3793103448275862, '002001': 0.5862068965517241, '002002': 0.41379310344827586, '002003': 0.7241379310344828, '002004': 0.4482758620689655, '002005': 0.6206896551724138, '002006': 0.5862068965517241, '002007': 0.6206896551724138, '002008': 0.41379310344827586, '002009': 0.2413793103448276, '002010': 0.20689655172413793, '002011': 0.7241379310344828, 'bad': 0.20689655172413793, 'good': 0.8275862068965517};

function add_imgs() {

    var img_id_st = 1983;
    var img_id_ed = 2011;
    var insert_id = img_id_ed - 1;
    var len = img_id_ed - img_id_st + 3;

    // Append "bad" img
    jQuery('<img/>', {
        src: 'imgs/img_list/bad.jpg',
        class: 'img_list_elem img_list_first'
    }).appendTo('#window');

    jQuery('<div>', {
        text: scores['bad'].toFixed(4),
        class: 'score_list_elem score_list_first'
    }).appendTo('#scores');

    // Insert all img until "insert_id"
    for (var img_id = img_id_st; img_id < insert_id; img_id++) {
        var img_name = '00' + img_id;
        jQuery('<img/>', {
            src: 'imgs/img_list/' + img_name + '.jpg',
            class: 'img_list_elem'
        }).appendTo('#window');
        
        jQuery('<div>', {
            text: scores[img_name].toFixed(4),
            class: 'score_list_elem'
        }).appendTo('#scores');
    }

    // Append "good" img
    jQuery('<img/>', {
        src: 'imgs/img_list/good.jpg',
        class: 'img_list_elem'
    }).appendTo('#window');

    jQuery('<div>', {
        text: scores['good'].toFixed(4),
        class: 'score_list_elem'
    }).appendTo('#scores');

    // Insert the rest
    for (var img_id = insert_id; img_id <= img_id_ed; img_id++) {
        var img_name = '00' + img_id;
        jQuery('<img/>', {
            src: 'imgs/img_list/' + img_name + '.jpg',
            class: 'img_list_elem'
        }).appendTo('#window');
        
        jQuery('<div>', {
            text: scores[img_name].toFixed(4),
            class: 'score_list_elem'
        }).appendTo('#scores');
    }

    $('#right-img').attr('src', 'imgs/bad-whole.jpg');

    // var scores_len = Object.keys(scores).length;
    // var pause_time_step = parseInt(time_lapse / (scores_len - 1));

    // Animation
    setTimeout(function () {
        
        $('.img_list_elem').animate({
            // top: '-=7068px', // original version, scroll all imgs
            top: '-=6384px',
        }, time_lapse);

        $('.score_list_elem').animate({
            // top: '-=7068px', // original version, scroll all imgs
            top: '-=6384px',
        }, time_lapse);

        $('#box').hide();
        $('#right-img').hide();
        
        // var keys = Object.keys(scores);

        // var score_idx = 0;
        // function display_score() {
        //     $("#score-box").html(scores[keys[score_idx]].toFixed(4));
        //     score_idx++;
        //     // console.log(keys[score_idx], scores[keys[score_idx]]);

        //     setTimeout(function() {
        //         display_score();
        //     }, pause_time_step);
        // }
        // display_score();

    }, pause0);

    setTimeout(function () {
        $('#right-img').attr('src', 'imgs/good-whole.jpg');
        $('#box').show();
        $('#right-img').show();
    }, pause0 + time_lapse)
    

}