$(function () {
    // Select row
    $('table tbody tr').on('click', function () {
        $('table tbody tr').each(function () {
            $(this).removeClass('table-primary')
        })

        $(this).addClass('table-primary')
    });

    // Click the up button
    $('#btn-up').on('click', function () {
        if ($('table tbody tr').hasClass('table-primary')) {
            let row = $('table > tbody > .table-primary');
            let row_prev = row.prev();
            if (row.prev.length) {
                row.insertBefore(row_prev);
            }
        }
    });

    // Click the down button
    $('#btn-down').on('click', function () {
        if ($('table tbody tr').hasClass('table-primary')) {
            let row = $('table > tbody > .table-primary');
            let row_next = row.next();
            if (row.next.length) {
                row.insertAfter(row_next);
            }
        }

    });

    // Click the add button
    $('#btn-add').on('click', function () {
        if ($('table tbody tr').hasClass('table-primary')) {
            let row = $('table > tbody > .table-primary');
            let newRow = row.clone(true);
            newRow.removeClass('table-primary');
            newRow.insertAfter($('table tbody tr').last());

        }

    });

    // Click the delete button
    $('#btn-delete').on('click', function () {
        if ($('table tbody tr').hasClass('table-primary')) {
            let row = $('table > tbody > .table-primary');
            row.remove();
        }
    });
});