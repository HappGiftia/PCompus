class Scripts {
    constructor() {
        this._initCommon(), this._initIcons(), this._initComponents(), this._initApps(), this._initPages(), this._initForms(), this._initPlugins()
    }

    _initCommon() {
        if ("undefined" != typeof Common) {
            new Common
        }
    }

    _initIcons() {
        if ("undefined" != typeof Icons) {
            new Icons
        }
    }

    _initComponents() {
        if ("undefined" != typeof ComponentsCards) {
            new ComponentsCards
        }
        if ("undefined" != typeof ComponentsNavs) {
            new ComponentsNavs
        }
        if ("undefined" != typeof ComponentsProgress) {
            new ComponentsProgress
        }
        if ("undefined" != typeof ComponentsSpinners) {
            new ComponentsSpinners
        }
        if ("undefined" != typeof ComponentsToasts) {
            new ComponentsToasts
        }
    }

    _initApps() {
        if ("undefined" != typeof Calendar) {
            new Calendar
        }
        if ("undefined" != typeof Mailbox) {
            new Mailbox
        }
        if ("undefined" != typeof Contacts) {
            new Contacts
        }
        if ("undefined" != typeof Chat) {
            new Chat
        }
        if ("undefined" != typeof Tasks) {
            new Tasks
        }
    }

    _initForms() {
        if ("undefined" != typeof FormLayouts) {
            new FormLayouts
        }
        if ("undefined" != typeof FormValidation) {
            new FormValidation
        }
        if ("undefined" != typeof FormWizards) {
            new FormWizards
        }
        if ("undefined" != typeof InputMask) {
            new InputMask
        }
        if ("undefined" != typeof GenericForms) {
            new GenericForms
        }
        if ("undefined" != typeof AutocompleteControls) {
            new AutocompleteControls
        }
        if ("undefined" != typeof DatePickerControls) {
            new DatePickerControls
        }
        if ("undefined" != typeof DropzoneControls) {
            new DropzoneControls
        }
        if ("undefined" != typeof EditorControls) {
            new EditorControls
        }
        if ("undefined" != typeof SpinnerControls) {
            new SpinnerControls
        }
        if ("undefined" != typeof RatingControls) {
            new RatingControls
        }
        if ("undefined" != typeof Select2Controls) {
            new Select2Controls
        }
        if ("undefined" != typeof SliderControls) {
            new SliderControls
        }
        if ("undefined" != typeof TagControls) {
            new TagControls
        }
        if ("undefined" != typeof TimePickerControls) {
            new TimePickerControls
        }
    }

    _initPlugins() {
        if ("undefined" != typeof Carousels) {
            new Carousels
        }
        if ("undefined" != typeof Charts) {
            new Charts
        }
        if ("undefined" != typeof ContextMenu) {
            new ContextMenu
        }
        if ("undefined" != typeof Lightbox) {
            new Lightbox
        }
        if ("undefined" != typeof Lists) {
            new Lists
        }
        if ("undefined" != typeof Notifies) {
            new Notifies
        }
        if ("undefined" != typeof Players) {
            new Players
        }
        if ("undefined" != typeof ProgressBars) {
            new ProgressBars
        }
        if ("undefined" != typeof Shortcuts) {
            new Shortcuts
        }
        if ("undefined" != typeof Sortables) {
            new Sortables
        }
        if ("undefined" != typeof EditableRows) {
            new EditableRows
        }
        if ("undefined" != typeof EditableBoxed) {
            new EditableBoxed
        }
        if ("undefined" != typeof RowsAjax) {
            new RowsAjax
        }
        if ("undefined" != typeof RowsServerSide) {
            new RowsServerSide
        }
        if ("undefined" != typeof BoxedVariations) {
            new BoxedVariations
        }
    }

    _initPages() {
        if ("undefined" != typeof DashboardDefault) {
            new DashboardDefault
        }
        if ("undefined" != typeof DashboardAnalytic) {
            new DashboardAnalytic
        }
        if ("undefined" != typeof DashboardVisual) {
            new DashboardVisual
        }
        if ("undefined" != typeof AuthLogin) {
            new AuthLogin
        }
        if ("undefined" != typeof AuthRegister) {
            new AuthRegister
        }
        if ("undefined" != typeof AuthForgotPassword) {
            new AuthForgotPassword
        }
        if ("undefined" != typeof AuthResetPassword) {
            new AuthResetPassword
        }
        if ("undefined" != typeof BlocksDetails) {
            new BlocksDetails
        }
        if ("undefined" != typeof BlocksGallery) {
            new BlocksGallery
        }
        if ("undefined" != typeof BlocksList) {
            new BlocksList
        }
        if ("undefined" != typeof BlocksStats) {
            new BlocksStats
        }
        if ("undefined" != typeof BlocksTabularData) {
            new BlocksTabularData
        }
        if ("undefined" != typeof BlocksThumbnails) {
            new BlocksThumbnails
        }
        if ("undefined" != typeof BlogHome) {
            new BlogHome
        }
        if ("undefined" != typeof BlogDetail) {
            new BlogDetail
        }
        if ("undefined" != typeof ComingSoon) {
            new ComingSoon
        }
        if ("undefined" != typeof PortfolioDetail) {
            new PortfolioDetail
        }
        if ("undefined" != typeof PortfolioHome) {
            new PortfolioHome
        }
        if ("undefined" != typeof ProfileSettings) {
            new ProfileSettings
        }
        if ("undefined" != typeof ProfileStandard) {
            new ProfileStandard
        }
    }
}

"undefined" != typeof Dropzone && (Dropzone.autoDiscover = !1);