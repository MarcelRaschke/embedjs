module.exports = `<div class="iframely-option">
    <% if (label) { %>
        <label class="iframely-option__label">
            <%- label %>:
        </label>
    <% } %>
    <div class="iframely-option__group<% if (inline) { %> iframely-option__group-inline<% } %>">
        <% items.forEach(function(subContext) { %>
            <div class="iframely-option-check iframely-option-radio">
                <input type="radio" class="iframely-option-check__input" id="<%- subContext.id %>" name="<%- key %>" value="<%- subContext.value %>"<% if (subContext.checked) { %> checked="checked"<% } %>>
                <label class="iframely-option-check__label" for="<%- subContext.id %>">
                        <%- subContext.label %>
                </label>
            </div>
        <% }); %>
    </div>
</div>`;