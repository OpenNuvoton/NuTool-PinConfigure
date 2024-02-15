# functions (nsis macro) for installer

!macro preInit
    SetRegView 64
    WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Program Files (x86)\Nuvoton Tools\NuTool-PinConfigure"
    WriteRegExpandStr HkCU "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Program Files (x86)\Nuvoton Tools\NuTool-PinConfigure"
    SetRegView 32
    WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Program Files (x86)\Nuvoton Tools\NuTool-PinConfigure"
    WriteRegExpandStr HkCU "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Program Files (x86)\Nuvoton Tools\NuTool-PinConfigure"
!macroend

!macro customInit
    IfFileExists "$INSTDIR\unins000.exe" file_found file_not_found
        file_found:
            MessageBox MB_OKCANCEL "You need to uninstall the old version before installing the new one." IDOK label_ok IDCANCEL label_cancel
            label_ok:
                ExecWait '"$INSTDIR\unins000.exe"'
                Goto end
            label_cancel:
                MessageBox MB_OK "Installation has been canceled." IDOK label_abort
                label_abort:
                    Abort
                    Goto end
        file_not_found:
        Goto end
    end:
!macroend