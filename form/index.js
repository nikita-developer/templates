
Start()

function Start() {
    if (m <= 9) {
        m = "0" + m;
    }
    var m = 10,
        s = 0,
        min = $('.all-form__min'),
        sec = $('.all-form__sec');

    if (m <= 9) {
        m = "0" + m;
    };

    var timerId = setTimeout(function tick() {
        if (s != 0) {
            s = s - 1;

            if (s <= 9) {
                s = "0" + s;
            }
        } else {
            if (m != 0) {
                m = m - 1;
                s = 59;

                if (m <= 9) {
                    m = "0" + m;
                }
            } else {
                return
            }

        }

        min.text(m);
        sec.text(s);
        timerId = setTimeout(tick, 1000);
    }, 1000);
}