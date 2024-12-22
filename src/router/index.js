const admin = [
    {
        path: "/", // Đường dẫn gốc
        component: () => import("../layout/admin.vue"),
        children: [
            {
                path: "/", // Không có dấu `/`
                component: () => import("../components/template/Post.vue"),
            },
            {
                path: "project/lungtung", // Không có dấu `/`
                component: () => import("../components/project/Lungtung.vue"),
            }
        ],
    },
];
export default admin;