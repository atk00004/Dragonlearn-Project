let currentDroppable = null;
let bar = holder_1.querySelector('.bar');
let isPicture = false;
let endTask = false;
let count = 1;

bar.onmousedown = function (event) {

    let shiftY = event.clientY - bar.getBoundingClientRect().top;


    bar.style.position = 'absolute';

    bar.style.zIndex = 1;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function moveAt(clientY) {
        if (clientY - shiftY - 246 < 0)
            if (document.getElementById("movethebarup").hidden == false) {
                bar.style.top = 170 + 'px';

                onMouseUp();

                document.getElementById("holder_2").append(bar);

                showPicture(currentDroppable);

                isPicture = true;

                if (!document.getElementById("movethebarup").hidden) {
                    document.getElementById("movethebarup").hidden = true;
                    document.getElementById("movethebardown").hidden = false;
                }
                else {
                    document.getElementById("movethebardown").hidden = true;
                    document.getElementById("movethebarup").hidden = false;
                }

                return;
            }
            else {
                bar.style.top = 0 + 'px';
                return;
            }
        if (clientY - shiftY - 248 > 340)
            if (document.getElementById("movethebardown").hidden == false) {
                bar.style.top = 340 + 'px';
                onMouseUp();

                showPicture(currentDroppable);

                isPicture = true;

                if (!document.getElementById("movethebarup").hidden) {
                    document.getElementById("movethebarup").hidden = true;
                    document.getElementById("movethebardown").hidden = false;
                }
                else {
                    document.getElementById("movethebardown").hidden = true;
                    document.getElementById("movethebarup").hidden = false;
                }

                bar.style.visibility = "hidden";

                endTask = true;

                return
            }
        bar.style.top = clientY - shiftY - 248 + 'px';

    }
    function showPicture(elem) {

        var image_1 = document.createElement("div");

        image_1.className = 'image_1';

        var urlI = 'url("/Images/51_' + count + '.png")';

        image_1.style.backgroundImage = urlI;

        image_1.id = 'sprite_' + count;

        count += 1;

        image_1.style.width = 180 + 'px';

        image_1.style.height = 180 + 'px';

        elem.append(image_1);


    }

    function onMouseMove(event) {


        moveAt(event.clientY);


        if (endTask) {


            document.getElementById("sprite_1").style.animationName = "sprite_1";

            document.getElementById("sprite_1").style.animationDuration = "2s";

            document.getElementById("sprite_1").style.animationFillMode = "both";

            document.getElementById("sprite_2").style.animationName = "sprite_2";

            document.getElementById("sprite_2").style.animationDuration = "2.5s";

            document.getElementById("sprite_2").style.animationFillMode = "both";

            document.getElementById("sprite_2").style.animationTimingFunction = "ease";
            onMouseUp();

            return;
        }


        bar.style.visibility = "hidden";

        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);


        bar.style.visibility = "visible";

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');


        if (currentDroppable != droppableBelow) {

            if (currentDroppable) {

                leaveDroppable(currentDroppable);

            }

            currentDroppable = droppableBelow;


            if (currentDroppable) {
                enterDroppable(currentDroppable);
            }
            //console.log(currentDroppable);

            /*if(bar.style.top == '340px'){

            }*/
        }
    }
    function enterDroppable(elem) {

        //elem.style.backgroundImage = "url('./Images/44.png')";
        elem.style.background = 'yellow';
    }

    function leaveDroppable(elem) {
        if (!isPicture)
            elem.style.backgroundImage = '';
        else
            isPicture = false;
    }


    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};

bar.ondragstart = function () {
    return false;
};