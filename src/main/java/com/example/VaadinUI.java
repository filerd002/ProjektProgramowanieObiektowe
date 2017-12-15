package com.example;

import com.vaadin.annotations.Title;
import com.vaadin.server.VaadinRequest;
import com.vaadin.shared.ui.grid.ColumnResizeMode;
import com.vaadin.spring.annotation.SpringUI;
import com.vaadin.ui.*;
import com.vaadin.ui.components.grid.SingleSelectionModel;
import java.util.ArrayList;
import java.util.List;


@Title("app")
@SpringUI(path = "/app")
public class VaadinUI extends UI {

    VerticalLayout verticalLayout = new VerticalLayout();
    HorizontalLayout horizontalLayout = new HorizontalLayout();

   
    protected void init(VaadinRequest vaadinRequest) {
    }

}
