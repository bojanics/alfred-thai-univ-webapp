﻿/**
 * Maps command button id with overlay wrapper id
 */
var commandIdWrapperIdMap = {};
commandIdWrapperIdMap['notificationsCommand'] = 'notificationsWrapper';
commandIdWrapperIdMap['settingsCommand'] = 'settingsWrapper';
commandIdWrapperIdMap['helpCommand'] = 'helpWrapper';
commandIdWrapperIdMap['accountsCommand'] = 'accountsWrapper';
commandIdWrapperIdMap['accountsCommandSmall'] = 'accountsWrapperSmall';

var hiddenWrappers = [];
var firstMenuItem = 'notdefined';

/**
 * Sets up the header and layout elements excluding a form
 */
function setupLayout() {
    // Check app configuration
    if (typeof brandObj !== 'undefined')
    {
        // Set up the main logo
        if (brandObj["mainlogopath"])
        {
            $("#mainLogo").find("img").attr("src", brandObj["mainlogopath"]);
        }
        
        // Set up partner's logo and show it if defined
        if (brandObj["partnerlogopath"])
        {
            $("#partnerLogo").find("img").attr("src", brandObj["partnerlogopath"]);
            $("#partnerLogo").show();
        }
    }
    
    if (typeof customizationObj !== 'undefined')
    {
        // Set up client's logo and show it if defined
        if (customizationObj["clientlogopath"])
        {
            $("#clientLogo").find(".client-logo").attr("src", customizationObj["clientlogopath"]);
            $("#clientLogo").show();
        }
    }
    
    if (typeof headerObj !== 'undefined')
    {
        var hasEnvironments = true;
        if (headerObj.hasOwnProperty("environment") && headerObj["environment"] === false)
        {
            $("#environmentcontainerl").hide();
            hiddenWrappers.push("environmentcontainerl");
            $("#environmentcontainers").hide();
            hiddenWrappers.push("environmentcontainers");
            hasEnvironments = false;
        }
        
        var missingHeaderElements = 0;
        if (headerObj.hasOwnProperty("notifications") && headerObj["notifications"] === false)
        {
            $("#notificationsCommandWrapper").hide();
            hiddenWrappers.push("notificationsCommandWrapper");
            missingHeaderElements ++;
        }
        else
        {
            firstMenuItem = 'notificationsWrapper';
        }
        
        if (headerObj.hasOwnProperty("settings") && headerObj["settings"] === false)
        {
            $("#settingsCommandWrapper").hide();
            hiddenWrappers.push("settingsCommandWrapper");
            missingHeaderElements ++;
            firstMenuItem = 'helpWrapper';
        }
        else if (firstMenuItem === 'notdefined')
        {
            firstMenuItem = 'settingsWrapper';
        }
        
        if (headerObj.hasOwnProperty("help") && headerObj["help"] === false)
        {
            $("#helpCommandWrapper").hide();
            hiddenWrappers.push("helpCommandWrapper");
            missingHeaderElements ++;
        }
        else if (firstMenuItem === 'notdefined')
        {
            firstMenuItem = 'helpWrapper';
        }
        
        var hasAccount = true;
        if (headerObj.hasOwnProperty("account") && headerObj["account"] === false)
        {
            $("#accountsCommandWrapperL").hide();
            hiddenWrappers.push("accountsCommandWrapperL");
            $("#accountsCommandWrapperS").hide();
            hiddenWrappers.push("accountsCommandWrapperS");
            hasAccount = false;
        }
        else if (firstMenuItem === 'notdefined')
        {
            firstMenuItem = 'accountsWrapper';
        }
        
        if (hasEnvironments && (missingHeaderElements > 0 || !hasAccount))
        {
            if (hasAccount)
            {
                switch (missingHeaderElements)
                {
                    case 1:
                        $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-one");
                        break;
                    case 2:
                        $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-two");
                        break;
                    case 3:
                        $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-three");
                }
            }
            else
            {
                switch (missingHeaderElements)
                {
                    case 0:
                        $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts");
                        break;
                    case 1:
                        $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-one");
                        break;
                    case 2:
                        $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-two");
                        break;
                    case 3:
                        $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-three");
                }
            }
        }
    }
    
    // Display the main logo even if its path is not defined in brandObj
    // In this case we use hardcoded path
    $("#mainLogo").show();
    
    // Set up the header title
    if (formObj.hasOwnProperty("title"))
    {
        $("#appTitle").find(".app-menu-brand").html(formObj["title"]);
    }
    
    $("#appTitle").show();
    
    $(document).mouseup(function (e)
    {
        var languageSelectorWrapper = $('#languages');
        if (!languageSelectorWrapper.is(e.target) && languageSelectorWrapper.has(e.target).length === 0)
        {
            languageSelectorWrapper.hide();
        }
    });
    
    $('.user-settings-card').click(function (e)
    {
        if (!$(this).hasClass('extended-card'))
        {
            e.stopPropagation();
            $(this).addClass('extended-card').removeClass('collapsed-card');
            $(this).find('.user-settings-card-value').addClass('user-settings-card-edit').removeClass('user-settings-card-value');
            $(this).find('#languageValue').hide();
            $(this).find('.user-settings-card-combo-wrapper').show();
            $(this).find('.user-settings-card-collapse-area').hide();
            $(this).find('.user-settings-card-footer').show();
        }
    });
    
    $('#saveLTZ').click(saveLTZ);
    $('#cancelLTZ').click(cancelLTZ);
    
    setupLanguageMenu();
}

/**
 * Shows content when bootstrap or bootswatch style is loaded and applied to the content
 */
function showContentOnStyleApply()
{
    // We added btn class to this element and it will have text-align
    // set to center once bootswatch has been rendered
    if ($("#renderIndicator").css("text-align") !== "right")
    {
        $('.content-wrapper').show();
    }
    else
    {
        setTimeout(showContentOnStyleApply, 50);
    }
}

/**
 * Reads style settings (bootswatch theme) from bran.json.js and applies it
 */
function setupStyle() {
    var bootswatchStyleDE = document.createElement("link");
    bootswatchStyleDE.rel = "stylesheet";
    
    // We should show the form after new styles has been loaded to prevent FOUC
    bootswatchStyleDE.onload = showContentOnStyleApply();
    if (typeof brandObj !== 'undefined' && brandObj["bootswatchtheme"])
    {
        bootswatchStyleDE.href = "./ress/css/" + brandObj["bootswatchtheme"] + "/bootstrap.min.css";
    }
    else
    {
        // If no bootswatch theme is defined we use cosmo
        bootswatchStyleDE.href = "./ress/css/cosmo/bootstrap.min.css";
    }
    
    var layoutStyleNode = document.getElementById("layoutstyle");
    layoutStyleNode.parentNode.insertBefore(bootswatchStyleDE, layoutStyleNode.nextSibling);
}

/**
 * Opens an overlay with user menu and commands. User menu content depends on selected button.
 * @param {any} userMenuButton header menu command button which has been selected
 */
function openUserMenu(userMenuButton)
{
    if (userMenuButton && userMenuButton.classList)
    {
        if (userMenuButton.classList.contains('app-menu-button-right-menu-selected'))
        {
            // In this case the menu button is already selected so we just need to close the
            // ovrelay.
            closeUserMenu();
        }
        else
        {
            // We should open the overlay and put the content depending on selected command.
            // Hide opened environment dropdowns first
            hideEnvironmentDropdown();
            
            // Hide app launcher menu if opened
            closeAppLauncher()
            
            // Close any opened overlay and then open the right one
            var openedMenuButtons = document.getElementsByClassName('app-menu-button-right-menu-selected');
            for (var openedMenuButtonIndex = 0; openedMenuButtonIndex < openedMenuButtons.length; openedMenuButtonIndex++)
            {
                openedMenuButtons[openedMenuButtonIndex].classList.remove('app-menu-button-right-menu-selected');
            }

            userMenuButton.classList.add('app-menu-button-right-menu-selected');

            // Find menu wrapper id from id of the selected button
            if (userMenuButton.id)
            {
                var wrapperId = commandIdWrapperIdMap[userMenuButton.id];
                if (wrapperId)
                {
                    // Hide all wrappers and then show the right one
                    var allWrappers = document.getElementsByClassName('user-settings-overlay');
                    for (var wrapperIndex = 0; wrapperIndex < allWrappers.length; wrapperIndex++)
                    {
                        if (!allWrappers[wrapperIndex].classList.contains('header-hidden-element'))
                        {
                            allWrappers[wrapperIndex].classList.add('header-hidden-element');
                        }
                    }

                    var wrapper = document.getElementById(wrapperId);
                    if (wrapper)
                    {
                        if (wrapper.parentElement.parentElement.classList.contains('user-settings-wrapper'))
                        {
                            wrapper.parentElement.parentElement.classList.remove('header-hidden-element');
                            if (firstMenuItem !== 'notdefined' && wrapperId !== firstMenuItem)
                            {
                                if (!wrapper.parentElement.parentElement.classList.contains('first-item'))
                                {
                                    wrapper.parentElement.parentElement.classList.add('first-item');
                                }
                            }
                            else if (wrapper.parentElement.parentElement.classList.contains('first-item'))
                            {
                                wrapper.parentElement.parentElement.classList.remove('first-item');
                            }
                        }
                        
                        wrapper.classList.remove('header-hidden-element');
                        var userMenu = document.getElementById('userMenuOverlay');
                        if (userMenu && userMenu.classList.contains('header-hidden-element'))
                        {
                            userMenu.classList.remove('header-hidden-element');
                        }

                        // Shrink the content
                        if ($(document).width() > 882)
                        {
                            var contentWrappers = document.getElementsByClassName('content-wrapper');
                            for (var i = 0; i < contentWrappers.length; i++)
                            {
                                contentWrappers[i].classList.add('shrink');
                            }
                        }
                    }
                }
            }
        }
    }
}

/**
 * Closes the menu overlay
 */
function closeUserMenu()
{
    var selectedCommandButtons = document.getElementsByClassName('app-menu-button-right-menu-selected');
    for (var buttonsIndex = 0; buttonsIndex < selectedCommandButtons.length; buttonsIndex++)
    {
        selectedCommandButtons[buttonsIndex].classList.remove('app-menu-button-right-menu-selected');
    }

    var userMenu = document.getElementById('userMenuOverlay');
    if (userMenu && !userMenu.classList.contains('header-hidden-element'))
    {
        userMenu.classList.add('header-hidden-element');
        var userSettingsWrappers = document.getElementsByClassName('user-settings-wrapper');
        if (userSettingsWrappers)
        {
            for (var wrappersIndex = 0; wrappersIndex < userSettingsWrappers.length; wrappersIndex++)
            {
                if (!userSettingsWrappers[wrappersIndex].classList.contains('header-hidden-element'))
                {
                    userSettingsWrappers[wrappersIndex].classList.add('header-hidden-element');
                }
                
                if (userSettingsWrappers[wrappersIndex].classList.contains('first-item'))
                {
                    userSettingsWrappers[wrappersIndex].classList.remove('first-item');
                }
            }
        }
        
        var userSettingsSmallWrappers = document.getElementsByClassName('user-settings-small-wrapper');
        if (userSettingsSmallWrappers)
        {
            for (var smallWrappersIndex = 0; smallWrappersIndex < userSettingsSmallWrappers.length; smallWrappersIndex++)
            {
                if (!userSettingsSmallWrappers[smallWrappersIndex].classList.contains('header-hidden-element'))
                {
                    userSettingsSmallWrappers[smallWrappersIndex].classList.add('header-hidden-element');
                }
            }
        }
    }

    // Expand the content
    var contentWrappers = document.getElementsByClassName('shrink');
    if (contentWrappers)
    {
        for (var contentWrappersIndex = 0; contentWrappersIndex < contentWrappers.length; contentWrappersIndex++)
        {
        contentWrappers[contentWrappersIndex].classList.remove('shrink');
    }
    }
}

/**
 * Displays hidden command buttons on screens having width <= 882px (mobile devices)
 */
function showCommands()
{
    // Hide visible buttons in mobile view
    var visibleButtons = document.getElementsByClassName('visiblesmcommands');
    for (var i = 0; i < visibleButtons.length; i++)
    {
        if (hiddenWrappers.indexOf(visibleButtons[i].id) === -1)
        {
            visibleButtons[i].classList.add('header-hidden-element');
        }
    }

    // Display hidden buttons in mobile view
    var hiddenButtons = document.getElementsByClassName('hiddensmcommands');
    for (var i = 0; i < hiddenButtons.length; i++)
    {
        if (hiddenWrappers.indexOf(hiddenButtons[i].id) === -1)
        {
            hiddenButtons[i].classList.add('visiblecommand');
        }
    }
    
    // Hide app launcher menu, environment dropdown and user menu overlay
    closeAppLauncher();
    hideEnvironmentDropdown();
    closeUserMenu();
    hideUserSettingsSmallMenuDropdown();
}

/**
 * Hides hidden command buttons on screens having width <= 882px (mobile devices)
 */
function hideCommands()
{
    // Hide hidden buttons in mobile view
    var hiddenButtons = document.getElementsByClassName('hiddensmcommands');
    for (var i = 0; i < hiddenButtons.length; i++)
    {
        if (hiddenWrappers.indexOf(hiddenButtons[i].id) === -1)
        {
            hiddenButtons[i].classList.remove('visiblecommand');
        }
    }

    // Display visible buttons in mobile view
    var visibleButtons = document.getElementsByClassName('visiblesmcommands');
    for (var i = 0; i < visibleButtons.length; i++)
    {
        if (hiddenWrappers.indexOf(visibleButtons[i].id) === -1)
        {
            visibleButtons[i].classList.remove('header-hidden-element');
        }
    }
    
    // Hide app launcher menu, environment dropdown and user menu overlay
    closeAppLauncher();
    hideEnvironmentDropdown();
    closeUserMenu();
}

/**
 * Opens a dropdown with environment tenants or closes if it has been already opened.
 */
function showEnvironmentDropdown(dropdownButton)
{
    // Close the menu overlay if opened
    closeUserMenu();
    
    // Close app launcher manu if opened
    closeAppLauncher();
    
    // Find a wrapping div of button and dropdown list
    var wrapper = dropdownButton.parentElement;
    if (wrapper)
    {
        var dropdownListWrapers = wrapper.getElementsByClassName('environment-dropdown');
        if (dropdownListWrapers && dropdownListWrapers[0] && dropdownListWrapers[0].classList.contains('header-hidden-element'))
        {
            // Open the dropdown menu
            dropdownListWrapers[0].classList.remove('header-hidden-element');
            dropdownButton.classList.add('opened');
        }
        else
        {
            // Close the dropdown menu
            dropdownListWrapers[0].classList.add('header-hidden-element');
            dropdownButton.classList.remove('opened');
        }
    }
}

/**
 * Hides all opened environment dropdowns
 */
function hideEnvironmentDropdown()
{
    var dropdownButtons = document.getElementsByClassName('environment-button');
    if (dropdownButtons)
    {
        for (var i = 0; i < dropdownButtons.length; i++)
        {
            var dropdownButton = dropdownButtons[i];
            
            // Find a wrapping div of button and dropdown list
            var wrapper = dropdownButton.parentElement;
            if (wrapper)
            {
                var dropdownListWrapers = wrapper.getElementsByClassName('environment-dropdown');
                if (dropdownListWrapers && dropdownListWrapers[0])//            && dropdownListWrapers[0].classList.contains('header-hidden-element'))
                {
                    // Close the dropdown menu
                    if (!dropdownListWrapers[0].classList.contains('header-hidden-element'))
                    {
                        dropdownListWrapers[0].classList.add('header-hidden-element');
                    }
                    
                    if (dropdownButton.classList.contains('opened'))
                    {
                        dropdownButton.classList.remove('opened');
                    }
                }
            }
        }
    }
}

/**
 * Opens user menu dropdown on small screeen devices or closes it if already opened
 */
function showUserSettingsSmallMenuDropdown(dropdownMenuButton)
{
    // Find a wrapping div of button and dropdown list
    var wrapper = dropdownMenuButton.parentElement.parentElement;
    if (wrapper)
    {
        var dropdownListWrapers = wrapper.getElementsByClassName('user-settings-small-menu-dropdown');
        if (dropdownListWrapers && dropdownListWrapers[0] && dropdownListWrapers[0].classList.contains('header-hidden-element'))
        {
            // Open the dropdown menu
            dropdownListWrapers[0].classList.remove('header-hidden-element');
            dropdownMenuButton.classList.add('opened');
        }
        else
        {
            // Close the dropdown menu
            dropdownListWrapers[0].classList.add('header-hidden-element');
            dropdownMenuButton.classList.remove('opened');
        }
    }
}

/**
 * Hides user menu dropdown on small screen devices
 */
function hideUserSettingsSmallMenuDropdown()
{
    var dropdownListWrapers = document.getElementsByClassName('user-settings-small-menu-dropdown');
    if (dropdownListWrapers)
    {
        for (var wrapperIndex = 0; wrapperIndex < dropdownListWrapers.length; wrapperIndex++)
        {
            if (!dropdownListWrapers[wrapperIndex].classList.contains('header-hidden-element'))
            {
                // Open the dropdown menu
                dropdownListWrapers[wrapperIndex].classList.add('header-hidden-element');
                
                var dropdownButtons = dropdownListWrapers[wrapperIndex].parentElement.getElementsByClassName('user-settings-small-menu-item');
                if (dropdownButtons)
                {
                    for (var buttonIndex = 0; buttonIndex < dropdownButtons.length; buttonIndex++)
                    {
                        if (dropdownButtons[buttonIndex].classList.contains('opened'))
                        {
                            dropdownButtons[buttonIndex].classList.remove('opened');
                        }
                    }
                }
            }
        }
    }
}

/**
 * Opens the app launcher or closes it if already opened
 */
function openAppLauncher(applButton)
{
    var launcher = document.getElementById('applauncher');
    if (launcher)
    {
        if (launcher.classList.contains('opened'))
        {
            launcher.classList.remove('opened');
            applButton.classList.remove('opened');
        }
        else
        {
            launcher.classList.add('opened');
            applButton.classList.add('opened');
            hideEnvironmentDropdown();
            hideUserSettingsSmallMenuDropdown();
            closeUserMenu();
        }
    }
}

/**
 * Closes the app launcher
 */
function closeAppLauncher()
{
    var launcher = document.getElementById('applauncher');
    if (launcher)
    {
        if (launcher.classList.contains('opened'))
        {
            launcher.classList.remove('opened');
            var applButtons = document.getElementsByClassName('appl-button');
            if (applButtons)
            {
                for (var buttonIndex = 0; buttonIndex < applButtons.length; buttonIndex++)
                {
                    if (applButtons[buttonIndex].classList.contains('opened'))
                    {
                        applButtons[buttonIndex].classList.remove('opened');
                    }
                }
            }
        }
    }
}

/**
 * Opends a list of available languages
 */
function chooseLanguage()
{
    $('#languages').show();
}

/**
 * Collapses extended 'Language and time zone' card
 */
function closeExtendedLTZCard()
{
    if ($('#LTZCard').hasClass('extended-card'))
    {
        $('#LTZCard').addClass('collapsed-card').removeClass('extended-card');
        $('#LTZCard').find('.user-settings-card-value').addClass('user-settings-card-value').removeClass('user-settings-card-edit');
        $('#LTZCard').find('#languageValue').show();
        $('#LTZCard').find('.user-settings-card-combo-wrapper').hide();
        $('#LTZCard').find('.user-settings-card-collapse-area').show();
        $('#LTZCard').find('.user-settings-card-footer').hide();
    }
}

/**
 * 
 */
function saveLTZ(e)
{
    e.stopPropagation();
    setChosenLanguage();
    closeExtendedLTZCard();
}

function cancelLTZ(e)
{
    e.stopPropagation();
    resetLanguage();
    closeExtendedLTZCard();
}