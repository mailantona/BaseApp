$(function () {
    var orders = new DevExpress.data.CustomStore({
        key: "id",
        update: function (key, values) {
            return $.ajax({
                url: "services/data/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            })
        },
        insert: function (values) {
            return $.ajax({
                url: "services/data",
                method: "POST",
                data: values
            })
        },

        remove: function (key) {
            return $.ajax({
                url: "services/data/" + encodeURIComponent(key),
                method: "DELETE",
            })
        },
        load: function (loadOptions) {
            var deferred = $.Deferred(),
                args = {};

            if (loadOptions.sort) {
                args.orderby = loadOptions.sort[0].selector;
                if (loadOptions.sort[0].desc) {
                    args.orderbyad = "desc";
                } else {
                    args.orderbyad = "asc";
                }

            }

            args.skip = loadOptions.skip || 0;
            args.take = loadOptions.take || 12;

            $.ajax({
                url: "services/data?a="+Math.random(),
                dataType: "json",
                data: args,
                success: function (result) {
                    deferred.resolve(result.items, { totalCount: result.totalCount });
                },
                error: function () {
                    deferred.reject("Data Loading Error");
                },
                timeout: 5000
            });

            return deferred.promise();
        }
    });

    $("#gridContainer").dxDataGrid({
        cacheEnabled: false,
        dataSource: {
            store: orders
        },

        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            mode: "popup",
            form: {
                items: [{
                    itemType: "group",
                    caption: "Personal Data",
                    items: [
                        {
                            dataField: "id", attr: {
                                id: 'MyID',
                                name: 'MyName'
                            }
                        },
                        { dataField: "name" }
                    ]

                    // or just
                    // items: ["Full_Name", "Prefix", "Position"]
                }],
                labelLocation: "top"
            },
            popup: {
                title: "Employee Info",
                showTitle: true,
                width: '90%',
                height: '90%',
                position: {
                    my: "top",
                    at: "top",
                    of: window
                }
            }
        },

        remoteOperations: {
            sorting: true,
            paging: true
        },
        paging: {
            pageSize: 3
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [3, 4, 100]
        },
        columns: [
            {
                dataField: "id",
                width: 70,
                dataType: 'number'
            },
            {
                dataField: "name"
                /* width: 300 */
            }
        ]
    }).dxDataGrid("instance");
});

