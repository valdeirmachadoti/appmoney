import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create } from './pendenciaActions'

import PendenciaForm from './pendenciaForm'
import PendenciaList from './pendenciaList'

class Pendecia extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title="Minhas Pendências" small="Gerenciar" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Incluir pendência" icon="plus" target="tabCreate" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabCreate">
                                <PendenciaForm onSubmit={this.props.create}
                                    submitLabel="Incluir" submitClass="primary"
                                />
                                <PendenciaList />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ init, create }, dispatch)
export default connect(null, mapDispatchToProps)(Pendecia)