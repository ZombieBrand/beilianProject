$(document).ready(function () {
    var $actName = location.search.substr(6);
    getJson();

    function getJson() {
        $.getJSON('../js/data.json', function (data) {
            var deepData = JSON.parse(JSON.stringify(data)).message;
            $(deepData).each(function (index, item) {
                if (item.id.toString() === $actName) {
                    pushData(item.videoList)
                }

            });
            console.log(deepData)

            // pushData(data)
        })
    }

    function pushData(data) {
        $(data).each(function (index, item) {
            var template = `   
        <li class="item">
            <div class="bgImg" style="background-image: url(${item.videoUrl}?vframe/png/offset/1.5);"></div>
            <p class="childrenName">${item.title}-${item.userName}</p>
        </li>`
            $('.wrap').append(template)
        })

    }
});
