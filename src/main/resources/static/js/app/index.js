let main = {
    init: function () {
        let _this = this;
        $('#btn-user-register').click(() => {
            _this.healthcheck();
        });

        $('#btn-update').on('click', function () {
            _this.update();
        });

        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    },
    healthcheck: function () {
        $.ajax({
            type: 'GET',
            url: '/api/v1/health',
            contentType: 'application/json; charset=utf-8',
        }).done(function () {
            alert('헬스체크 성공.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    register: function () {
        let userData = {
            name: $('#name').val(),
            age: $('#age').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/register',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(userData)
        }).done(function () {
            alert('유저가 등록되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }
}