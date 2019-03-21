module.exports = `<div class="iframely-option-check iframely-option-checkbox">
    <input type="checkbox" class="iframely-option-check__input" id="<%- key %>" name="<%- key %>"<% if (checked) { %> checked="checked"<% } %>>
    <label class="iframely-option-check__label" for="<%- id %>">
        <%- label %>
    </label>
</div>`;
