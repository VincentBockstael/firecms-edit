module.exports = {
    docsSidebar: [
        {
            type: 'doc',
            label: 'Introduction',
            id: 'intro'
        },
        'quickstart',
        {
            type: 'category',
            label: 'Entities',
            items: [
                'entities/entity_schemas',
                {
                    type: 'category',
                    label: 'Properties',
                    items: [
                        'entities/properties/properties_intro',
                        'entities/properties/string',
                        'entities/properties/number',
                        'entities/properties/boolean',
                        'entities/properties/reference',
                        'entities/properties/timestamp',
                        'entities/properties/array',
                        'entities/properties/map',
                        'entities/properties/geopoint'
                    ]
                },
                'entities/conditional_fields',
                'entities/custom_fields',
                'entities/custom_previews',
                'entities/custom_schema_views',
            ]
        },
        {
            type: 'category',
            label: 'Collections',
            items: [
                'collections/collections',
                'collections/saving_callbacks',
                'collections/permissions',
            ]
        },
        'navigation',
        'custom_top_level_views',
        {
            type: 'category',
            label: 'Provided hooks',
            items: [
                'hooks/use_auth_controller',
                'hooks/use_side_entity_controller',
                'hooks/use_snackbar_controller',
                'hooks/use_firecms_context',
            ]
        },
        {
            type: 'category',
            label: 'General configuration',
            items: [

            ]
        },
        {
            type: 'category',
            label: 'Firebase CMS app',
            items: [
                'firebase_cms_app',
                'firebase_setup',
                'deployment',
            ]
        },
        'custom_cms_app',
        'migrating_from_alpha_versions',
        'changelog'
    ],

    apiSidebar: [{
        type: 'autogenerated',
        dirName: 'api'
    }]
}
